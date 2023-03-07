export type WorkTag =
	| typeof FunctionComponent
	| typeof HostComponent
	| typeof HostRoot
	| typeof HostText;
export const FunctionComponent = 0;
export const HostRoot = 3;
export const HostComponent = 5;
//<div>...</div>
export const HostText = 6;
