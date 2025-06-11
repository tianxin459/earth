/**
 * 🎮 网页自动化脚本 - 浏览器控制台版
 * 
 * 使用方法：
 * 1. 复制此脚本到浏览器控制台
 * 2. 按回车执行
 * 3. 输入 startAuto() 开始自动化
 * 4. 输入 stopAuto() 停止
 */

console.clear();
console.log('🎮 加载网页自动化脚本...');

// 立即执行函数，避免污染全局作用域
(function() {
    'use strict';
    
    // 📋 从 action.csv 解析的操作数据
    const actions = [
        {
            time: '00:01',
            type: 'key',
            target: 'I',
            desc: ''
        },
        {
            time: '00:09',
            type: 'click',
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
            desc: ''
        },
        {
            time: '00:56',
            type: 'key',
            target: 'W',
            desc: ''
        },
        {
            time: '01:43',
            type: 'key',
            target: 'F',
            desc: ''
        },
        {
            time: '02:30',
            type: 'click',
            selectors: [
                ["aria/Expand AI Summary (A)"],
                ["div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"],
                ["xpath///*[@id=\"root\"]/div/div[1]/div[1]/div/button[2]"],
                ["pierce/div.jVSNaJ > div:nth-of-type(1) button:nth-of-type(2)"]
            ],
            desc: '机器人图标'
        }
    ];
    
    // 🔧 全局状态变量
    let isRunning = false;
    let currentIndex = 0;
    let startTime = 0;
    
    // ⏱️ 时间转换函数
    function timeToMilliseconds(timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return (minutes * 60 + seconds) * 1000;
    }
    
    // 🔍 智能元素查找器
    function findElement(selectors) {
        if (!selectors || !Array.isArray(selectors)) {
            return null;
        }
        
        for (const selectorGroup of selectors) {
            if (!Array.isArray(selectorGroup) || !selectorGroup[0]) {
                continue;
            }
            
            const selector = selectorGroup[0];
            let element = null;
            
            try {
                if (selector.startsWith('aria/')) {
                    // 🏷️ ARIA 选择器处理
                    const ariaText = selector.substring(5).replace(/[()]/g, '').trim();
                    
                    // 尝试多种ARIA查找方式
                    const ariaSelectors = [
                        `[aria-label*="${ariaText}"]`,
                        `[title*="${ariaText}"]`,
                        `button[aria-label*="${ariaText}"]`
                    ];
                    
                    for (const ariaSel of ariaSelectors) {
                        element = document.querySelector(ariaSel);
                        if (element) break;
                    }
                    
                    // 如果还没找到，尝试XPath文本查找
                    if (!element) {
                        const xpath = `//button[contains(text(), "${ariaText}")]`;
                        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                        element = result.singleNodeValue;
                    }
                    
                } else if (selector.startsWith('xpath//')) {
                    // 🛤️ XPath 选择器
                    const xpath = selector.substring(7);
                    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                    element = result.singleNodeValue;
                    
                } else if (selector.startsWith('pierce/')) {
                    // 🎯 Pierce 选择器（类似CSS）
                    const cssSelector = selector.substring(7);
                    element = document.querySelector(cssSelector);
                    
                } else {
                    // 📝 普通 CSS 选择器
                    element = document.querySelector(selector);
                }
                
                // 检查元素是否可见和可交互
                if (element && element.offsetParent !== null) {
                    console.log(`✅ 找到元素: ${selector}`);
                    return element;
                }
                
            } catch (error) {
                console.debug(`选择器失败: ${selector}`, error);
            }
        }
        
        console.warn('⚠️ 未找到匹配元素');
        return null;
    }
    
    // ⌨️ 执行按键操作
    function executeKeyPress(key) {
        console.log(`🔤 按键操作: ${key}`);
        
        const activeElement = document.activeElement || document.body;
        
        // 创建标准键盘事件
        const eventOptions = {
            key: key,
            code: `Key${key}`,
            keyCode: key.charCodeAt(0),
            which: key.charCodeAt(0),
            bubbles: true,
            cancelable: true
        };
        
        // 发送keydown事件
        const keydownEvent = new KeyboardEvent('keydown', eventOptions);
        activeElement.dispatchEvent(keydownEvent);
        document.dispatchEvent(keydownEvent);
        
        // 发送keyup事件
        const keyupEvent = new KeyboardEvent('keyup', eventOptions);
        activeElement.dispatchEvent(keyupEvent);
        document.dispatchEvent(keyupEvent);
        
        console.log(`✅ 按键完成: ${key}`);
    }
    
    // 🖱️ 执行点击操作
    function executeClick(selectors) {
        console.log('🖱️ 执行点击操作...');
        
        const element = findElement(selectors);
        if (!element) {
            console.error('❌ 未找到目标元素');
            return false;
        }
        
        // 📍 滚动到元素位置
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'center'
        });
        
        // ⏳ 等待滚动完成后执行点击
        setTimeout(() => {
            // 🎨 高亮显示元素（视觉反馈）
            const originalStyle = element.style.cssText;
            element.style.cssText += '; border: 3px solid #ff4444 !important; background-color: rgba(255,255,0,0.3) !important; transition: all 0.2s;';
            
            // 🖱️ 创建并触发点击事件
            const rect = element.getBoundingClientRect();
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2
            });
            
            element.dispatchEvent(clickEvent);
            
            // 🔄 如果是按钮，也调用原生click方法
            if (typeof element.click === 'function') {
                element.click();
            }
            
            console.log('✅ 点击操作完成');
            
            // 🎨 恢复原始样式
            setTimeout(() => {
                element.style.cssText = originalStyle;
            }, 500);
            
        }, 200);
        
        return true;
    }
    
    // 🎯 执行单个操作
    function executeAction(action) {
        const actionDesc = action.type === 'key' ? 
            `按键: ${action.target}` : 
            `点击元素${action.desc ? ' (' + action.desc + ')' : ''}`;
            
        console.log(`🎯 [${action.time}] ${actionDesc}`);
        
        switch (action.type.toLowerCase()) {
            case 'key':
                executeKeyPress(action.target);
                break;
            case 'click':
                executeClick(action.selectors);
                break;
            default:
                console.warn(`⚠️ 未知操作类型: ${action.type}`);
        }
    }
    
    // 🔄 执行下一个操作
    function executeNext() {
        if (!isRunning || currentIndex >= actions.length) {
            // 🎉 操作完成
            isRunning = false;
            console.log('🎉 所有操作执行完成！');
            return;
        }
        
        const action = actions[currentIndex];
        const elapsedTime = Date.now() - startTime;
        const targetTime = timeToMilliseconds(action.time);
        
        if (elapsedTime >= targetTime) {
            // ⏰ 时间到了，执行操作
            executeAction(action);
            currentIndex++;
            
            // 🔄 短暂延迟后继续下一个操作
            setTimeout(executeNext, 500);
        } else {
            // ⏳ 还没到时间，继续等待
            const remainingTime = targetTime - elapsedTime;
            console.log(`⏱️ 等待 ${(remainingTime / 1000).toFixed(1)} 秒...`);
            setTimeout(executeNext, Math.min(remainingTime, 1000));
        }
    }
    
    // 🚀 开始自动化操作
    function startAutomation() {
        if (isRunning) {
            console.log('⚠️ 自动化操作已在运行中');
            return;
        }
        
        console.log('🚀 开始执行自动化操作...');
        console.log(`📊 共 ${actions.length} 个操作待执行`);
        
        isRunning = true;
        currentIndex = 0;
        startTime = Date.now();
        
        executeNext();
    }
    
    // 🛑 停止自动化操作
    function stopAutomation() {
        if (!isRunning) {
            console.log('ℹ️ 当前没有运行中的操作');
            return;
        }
        
        isRunning = false;
        console.log('🛑 自动化操作已停止');
    }
    
    // 📊 显示当前状态
    function showStatus() {
        console.log('📊 当前状态:', {
            运行中: isRunning,
            当前操作: `${currentIndex + 1}/${actions.length}`,
            下一个操作: actions[currentIndex] || '无'
        });
    }
    
    // 📋 显示操作列表
    function showActions() {
        console.log('📋 操作列表:');
        actions.forEach((action, index) => {
            const desc = action.type === 'key' ? 
                `按键: ${action.target}` : 
                `点击元素${action.desc ? ' (' + action.desc + ')' : ''}`;
            const status = index < currentIndex ? '✅' : 
                         index === currentIndex ? '➡️' : '⏳';
            console.log(`  ${status} ${index + 1}. [${action.time}] ${desc}`);
        });
    }
    
    // 🧪 测试单个操作
    function testAction(index) {
        if (index < 1 || index > actions.length) {
            console.error(`❌ 无效索引，请输入 1-${actions.length}`);
            return;
        }
        
        const action = actions[index - 1];
        console.log(`🧪 测试操作 ${index}:`);
        executeAction(action);
    }
    
    // 🌍 暴露全局控制函数
    window.startAuto = startAutomation;
    window.stopAuto = stopAutomation;
    window.showStatus = showStatus;
    window.showActions = showActions;
    window.testAction = testAction;
    
    // 📖 显示使用说明
    console.log(`
🎮 网页自动化脚本加载完成！

📋 可用命令：
┌─────────────────────────────────────────┐
│  startAuto()      - 🚀 开始自动化操作    │
│  stopAuto()       - 🛑 停止操作         │
│  showStatus()     - 📊 显示当前状态     │
│  showActions()    - 📋 显示操作列表     │
│  testAction(序号) - 🧪 测试单个操作     │
└─────────────────────────────────────────┘

🚀 快速开始: startAuto()
    `);
    
    // 📋 自动显示操作预览
    showActions();
    
})();

console.log('✅ 脚本加载完成，输入 startAuto() 开始！');
