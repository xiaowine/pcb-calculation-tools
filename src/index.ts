/**
 * 入口文件
 *
 * 本文件为默认扩展入口文件，如果你想要配置其它文件作为入口文件，
 * 请修改 `extension.json` 中的 `entry` 字段；
 *
 * 请在此处使用 `export`  导出所有你希望在 `headerMenus` 中引用的方法，
 * 方法通过方法名与 `headerMenus` 关联。
 *
 * 如需了解更多开发细节，请阅读：
 * https://prodocs.lceda.cn/cn/api/guide/
 */
// import * as extensionConfig from '../extension.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(status?: 'onStartupFinished', arg?: string): void {}

export function open_page_about(): void {
	eda.sys_IFrame.openIFrame('/iframe/about.html', 560, 330, 'about');
}
export function open_page_line_width_calculation(): void {
	eda.sys_IFrame.openIFrame('/iframe/line-width.html', 560, 400, 'line-width');
}
export function open_page_resistive_divider_calculation(): void {
	eda.sys_IFrame.openIFrame('/iframe/resistive-divider.html', 560, 610, 'resistive-divider');
}
export function open_page_inductor_design(): void {
	eda.sys_IFrame.openIFrame('/iframe/inductor-design.html', 664, 664, 'inductor-design');
}
export function go_project(): void {
	eda.sys_Window.open('https://github.com/xiaowine/pcb-calculation-tools');
}
