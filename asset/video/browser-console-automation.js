/**
 * 网页自动化操作脚本 - 浏览器控制台版本
 * 基于 action.csv 中的操作序列
 * 直接在浏览器控制台中粘贴运行
 */

(function() {
    'use strict';
    
    // 操作数据 - 来自 action.csv
    const actions = [
        {
            time: '00:01',
            type: 'key',
            target: 'A',
            selector: null,
            desc: ''
        },
        {
            time: '00:09',
            type: 'click',
            target: '',
            selectors: [
                ["div.sc-hARSoJ > button"],
                ["xpath///*[@id=\"root\"]/div/div[2]/button"],
                ["pierce/div.sc-hARSoJ > button"]
            ],
            desc: 'dashboard'
        },
        {
            time: '00:15',
            type: 'key',
            target: 'Q',
            selector: null,
            desc: ''
        },
        {
            time: '00:56',
            type: 'key',
            target: 'W',
            selector: null,
            desc: ''
        },
        {
            time: '01:43',
            type: 'key',
            target: 'F',
            selector: null,
            desc: ''
        },
        {
            time: '02:30',
            type: 'click',
            target: '',
            selectors: [
                ["aria/Expand AI Summary (A)"],
                ["div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"],
                ["xpath///*[@id=\"root\"]/div/div[1]/div[1]/div/button[2]"],
                ["pierce/div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"]
            ],
            desc: '机器人图标'
        }
    ];
    
    // 全局状态
    let isRunning = false;
    let currentActionIndex = 0;
    let startTime = null;
    
    // 工具函数：时间转换为毫秒
    function timeToMs(timeStr) {
        const parts = timeStr.split(':');
        const minutes = parseInt(parts[0]) || 0;
        const seconds = parseInt(parts[1]) || 0;
        return (minutes * 60 + seconds) * 1000;
    }
    
    // 工具函数：查找元素
    function findElement(selectors) {
        if (!selectors || !Array.isArray(selectors)) {
            return null;
        }
        
        for (const selectorGroup of selectors) {
            if (!Array.isArray(selectorGroup) || selectorGroup.length === 0) {
                continue;
            }
            
            const selector = selectorGroup[0];
            let element = null;
            
            try {
                if (selector.startsWith('aria/')) {
                    // ARIA选择器
                    const ariaText = selector.substring(5).trim();
                    const cleanText = ariaText.replace(/[()]/g, '').trim();
                    
                    // 尝试多种ARIA查找方式
                    const queries = [
                        `[aria-label*="${cleanText}"]`,
                        `[title*="${cleanText}"]`,
                        `button:contains("${cleanText}")`,
                        `[aria-label="${ariaText}"]`,
                        `[title="${ariaText}"]`
                    ];
                    
                    for (const query of queries) {
                        try {
                            if (query.includes(':contains')) {
                                // 使用XPath查找包含文本的元素
                                const xpath = `//button[contains(text(), "${cleanText}")]`;
                                const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                element = result.singleNodeValue;
                            } else {
                                element = document.querySelector(query);
                            }
                            if (element) break;
                        } catch (e) {
                            console.debug('ARIA查询失败:', query, e);
                        }
                    }
                    
                } else if (selector.startsWith('xpath//')) {
                    // XPath选择器
                    const xpath = selector.substring(7);
                    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                    element = result.singleNodeValue;
                    
                } else if (selector.startsWith('pierce/')) {
                    // Pierce选择器（类似CSS选择器）
                    const cssSelector = selector.substring(7);
                    element = document.querySelector(cssSelector);
                    
                } else {
                    // 普通CSS选择器
                    element = document.querySelector(selector);
                }
                
                if (element && element.offsetParent !== null) {
                    console.log(`✓ 找到元素:`, selector, element);
                    return element;
                }
                
            } catch (error) {
                console.debug(`选择器查找失败: ${selector}`, error);
            }
        }
        
        console.warn('未找到匹配元素:', selectors);
        return null;
    }
    
    // 执行按键操作
    function executeKeyAction(target) {
        console.log(`🔤 执行按键操作: ${target}`);
        
        // 获取当前焦点元素或使用body
        const activeElement = document.activeElement || document.body;
        
        // 创建键盘事件
        const keydownEvent = new KeyboardEvent('keydown', {
            key: target,
            code: `Key${target}`,
            keyCode: target.charCodeAt(0),
            which: target.charCodeAt(0),
            bubbles: true,
            cancelable: true
        });
        
        const keyupEvent = new KeyboardEvent('keyup', {
            key: target,
            code: `Key${target}`,
            keyCode: target.charCodeAt(0),
            which: target.charCodeAt(0),
            bubbles: true,
            cancelable: true
        });
        
        // 触发事件
        activeElement.dispatchEvent(keydownEvent);
        activeElement.dispatchEvent(keyupEvent);
        
        // 也在document上触发
        document.dispatchEvent(keydownEvent);
        document.dispatchEvent(keyupEvent);
        
        console.log(`✅ 按键操作完成: ${target}`);
    }
    
    // 执行点击操作
    function executeClickAction(selectors) {
        console.log('🖱️  执行点击操作...');
        
        const element = findElement(selectors);
        
        if (!element) {
            console.error('❌ 未找到目标元素');
            return false;
        }
        
        try {
            // 滚动到元素可见
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'center'
            });
            
            // 等待滚动完成
            setTimeout(() => {
                // 高亮元素（视觉反馈）
                const originalStyle = element.style.cssText;
                element.style.cssText += '; border: 3px solid red !important; background-color: yellow !important;';
                
                setTimeout(() => {
                    element.style.cssText = originalStyle;
                }, 500);
                
                // 创建点击事件
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    clientX: element.getBoundingClientRect().left + element.offsetWidth / 2,
                    clientY: element.getBoundingClientRect().top + element.offsetHeight / 2
                });
                
                // 执行点击
                element.dispatchEvent(clickEvent);
                
                // 如果是按钮，也调用原生click方法
                if (typeof element.click === 'function') {
                    element.click();
                }
                
                console.log('✅ 点击操作完成');
                
            }, 200);
            
            return true;
            
        } catch (error) {
            console.error('❌ 点击操作失败:', error);
            return false;
        }
    }
    
    // 执行单个操作
    function executeAction(action) {
        console.log(`🎯 执行操作 [${action.time}]: ${action.type} - ${action.target || '点击元素'}`);
        
        switch (action.type.toLowerCase()) {
            case 'key':
                executeKeyAction(action.target);
                break;
            case 'click':
                executeClickAction(action.selectors);
                break;
            default:
                console.warn('⚠️  未知操作类型:', action.type);
        }
    }
    
    // 执行下一个操作
    function executeNextAction() {
        if (!isRunning || currentActionIndex >= actions.length) {
            stopAutomation();
            return;
        }
        
        const action = actions[currentActionIndex];
        const currentTime = Date.now() - startTime;
        const targetTime = timeToMs(action.time);
        
        if (currentTime >= targetTime) {
            // 时间到了，执行操作
            executeAction(action);
            currentActionIndex++;
            
            // 继续下一个操作
            setTimeout(executeNextAction, 300);
        } else {
            // 还没到时间，等待
            const waitTime = targetTime - currentTime;
            console.log(`⏱️  等待 ${(waitTime/1000).toFixed(1)} 秒...`);
            setTimeout(executeNextAction, Math.min(waitTime, 1000));
        }
    }
    
    // 开始自动化
    function startAutomation() {
        if (isRunning) {
            console.log('⚠️  脚本已在运行中');
            return;
        }
        
        console.log('🚀 开始执行自动化操作...');
        console.log(`📋 共有 ${actions.length} 个操作需要执行`);
        
        isRunning = true;
        currentActionIndex = 0;
        startTime = Date.now();
        
        executeNextAction();
    }
    
    // 停止自动化
    function stopAutomation() {
        if (!isRunning) return;
        
        isRunning = false;
        console.log('🛑 自动化操作已停止');
        
        if (currentActionIndex >= actions.length) {
            console.log('🎉 所有操作执行完成！');
        }
    }
    
    // 重置状态
    function resetAutomation() {
        stopAutomation();
        currentActionIndex = 0;
        startTime = null;
        console.log('🔄 已重置到初始状态');
    }
    
    // 显示操作列表
    function showActions() {
        console.log('📋 操作列表:');
        actions.forEach((action, index) => {
            const desc = action.type === 'key' ? 
                `按键: ${action.target}` : 
                `点击: ${action.selectors?.[0]?.[0] || '元素'}`;
            console.log(`  ${index + 1}. [${action.time}] ${desc}`);
        });
    }
    
    // 测试单个操作
    function testAction(index) {
        if (index < 0 || index >= actions.length) {
            console.error('❌ 无效的操作索引');
            return;
        }
        
        const action = actions[index];
        console.log(`🧪 测试操作 ${index + 1}:`, action);
        executeAction(action);
    }
    
    // 暴露到全局
    window.automation = {
        start: startAutomation,
        stop: stopAutomation,
        reset: resetAutomation,
        show: showActions,
        test: testAction,
        status: () => ({
            isRunning,
            currentActionIndex,
            totalActions: actions.length,
            nextAction: actions[currentActionIndex]
        })
    };
    
    // 输出使用说明
    console.log(`
🎮 网页自动化脚本已加载！

📋 可用命令:
  automation.start()     - 开始执行自动化操作
  automation.stop()      - 停止执行
  automation.reset()     - 重置到初始状态
  automation.show()      - 显示所有操作
  automation.test(索引)   - 测试单个操作 (从0开始)
  automation.status()    - 查看当前状态

🚀 快速开始: automation.start()
    `);
    
    // 显示操作预览
    showActions();
    
})();

// 兼容性：也提供简化的全局函数
window.startAutomation = () => window.automation.start();
window.stopAutomation = () => window.automation.stop();
window.resetAutomation = () => window.automation.reset();
