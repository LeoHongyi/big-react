import { FiberNode } from './fiber';
export function renderWithHooks(wip: FiberNode) {
	const component = wip.type;
	const props = wip.pendingProps;
	const children = component(props);

	return children;
}
