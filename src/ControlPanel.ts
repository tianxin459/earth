export interface ControlPanelOptions {
  onFilter?: (start: string, end: string) => void;
}

export class ControlPanel {
  private panel: HTMLDivElement;
  private startSelect: HTMLSelectElement;
  private endSelect: HTMLSelectElement;
  private static readonly linesJsonUrl = import.meta.env.BASE_URL + 'lines.json';

  constructor(options: ControlPanelOptions = {}) {
    this.panel = document.createElement('div');
    this.panel.id = 'control-panel';
    this.panel.innerHTML = `
      <div class="panel-header">
        <span>⚙️ 控制面板</span>
        <button id="panel-toggle-btn">⮞</button>
      </div>
      <div class="panel-body">
        <label>起点港口</label>
        <select id="start-port"><option value="all">全部</option></select>
        <label>终点港口</label>
        <select id="end-port"><option value="all">全部</option></select>
      </div>
      <button id="panel-toggle-mini" title="展开控制面板">⮞</button>
    `;
    document.body.appendChild(this.panel);

    // 样式
    const style = document.createElement('style');
    style.textContent = `
      #control-panel {
        position: fixed; left: 0; top: 0; height: 100vh; width: 260px;
        background: linear-gradient(135deg, #1a233a 80%, #2e3b55 100%);
        box-shadow: 2px 0 16px #000a;
        border-right: 2px solid #0ff4;
        color: #0ff;
        font-family: 'Consolas', 'Roboto Mono', monospace;
        z-index: 9999;
        opacity: 0.98;
        user-select: none;
        transition: box-shadow 0.3s;
      }
      #control-panel:not(.expanded) {
        width: 0;
        min-width: 0;
        box-shadow: none;
        border: none;
        background: none;
        pointer-events: none;
      }
      #control-panel .panel-header,
      #control-panel .panel-body {
        display: block;
      }
      #control-panel:not(.expanded) .panel-header,
      #control-panel:not(.expanded) .panel-body {
        display: none;
      }
      #panel-toggle-btn {
        background: none; border: none; color: #0ff; font-size: 1.3em;
        cursor: pointer; transition: transform 0.2s;
      }
      #control-panel.expanded #panel-toggle-btn {
        transform: rotate(180deg);
      }
      #panel-toggle-mini {
        display: none;
        position: fixed;
        left: 8px;
        top: 8px;
        z-index: 10000;
        background: #1a233a;
        color: #0ff;
        border: 1.5px solid #0ff8;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 1.3em;
        box-shadow: 0 2px 8px #000a;
        cursor: pointer;
        opacity: 0.95;
        transition: opacity 0.2s;
        pointer-events: auto;
      }
      #control-panel:not(.expanded) #panel-toggle-mini {
        display: block;
      }
      #control-panel.expanded #panel-toggle-mini {
        display: none;
      }
      #control-panel label {
        color: #7fffd4; font-size: 0.98em; margin-bottom: 4px;
        text-shadow: 0 0 4px #0ff8;
      }
      #control-panel select {
        background: #101828; color: #0ff; border: 1px solid #0ff8;
        border-radius: 4px; padding: 6px 8px; font-size: 1em;
        margin-bottom: 8px; outline: none;
        box-shadow: 0 0 8px #0ff2 inset;
        transition: border 0.2s, box-shadow 0.2s;
      }
      #control-panel select:focus {
        border: 1.5px solid #fff;
        box-shadow: 0 0 12px #0ff8;
      }
    `;
    document.head.appendChild(style);

    // 状态恢复
    const expanded = localStorage.getItem('panel-expanded') === '1';
    if (expanded) this.panel.classList.add('expanded');
    this.startSelect = this.panel.querySelector('#start-port') as HTMLSelectElement;
    this.endSelect = this.panel.querySelector('#end-port') as HTMLSelectElement;

    // 展开/收起
    this.panel.querySelector('#panel-toggle-btn')!.addEventListener('click', () => {
      this.panel.classList.remove('expanded');
      localStorage.setItem('panel-expanded', '0');
    });
    this.panel.querySelector('#panel-toggle-mini')!.addEventListener('click', () => {
      this.panel.classList.add('expanded');
      localStorage.setItem('panel-expanded', '1');
    });

    // 下拉框事件
    const triggerFilter = () => {
      const start = this.startSelect.value;
      const end = this.endSelect.value;
      localStorage.setItem('start-port', start);
      localStorage.setItem('end-port', end);
      window.dispatchEvent(new CustomEvent('filter', { detail: { start, end } }));
      if (options.onFilter) options.onFilter(start, end);
    };
    this.startSelect.addEventListener('change', triggerFilter);
    this.endSelect.addEventListener('change', triggerFilter);

    // 加载港口数据并填充下拉框
    fetch(ControlPanel.linesJsonUrl)
      .then(res => res.json())
      .then(data => {
        const portNames: string[] = (data.ports || []).map((p: any) => p.name);
        this.startSelect.innerHTML = '<option value="all">全部</option>' +
          portNames.map(name => `<option value="${name}">${name}</option>`).join('');
        this.endSelect.innerHTML = '<option value="all">全部</option>' +
          portNames.map(name => `<option value="${name}">${name}</option>`).join('');
        // 恢复上次选择
        this.startSelect.value = localStorage.getItem('start-port') || 'all';
        this.endSelect.value = localStorage.getItem('end-port') || 'all';
      });
  }
}