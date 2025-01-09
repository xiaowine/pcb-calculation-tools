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
import * as extensionConfig from '../extension.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(status?: 'onStartupFinished', arg?: string): void {}

export function about(): void {
	eda.sys_MessageBox.showInformationMessage(
		eda.sys_I18n.text('AboutDescription', undefined, undefined, extensionConfig.version),
		eda.sys_I18n.text('About'),
	);
}
export function line_width_calculation(): void {
	eda.sys_IFrame.openIFrame('/iframe/line-width.html', 1000, 550, 'line-width');
}
export function resistive_divider_calculation(): void {
	eda.sys_IFrame.openIFrame('/iframe/resistive-divider.html', 1000, 720, 'resistive-divider');
}
export function go_project(): void {
	eda.sys_Window.open('https://github.com/xiaowine/pcb-calculation-tools');
}
