import { Props, Key } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;

	memorizedProps: Props | null;
	alternate: FiberNode | null;
	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		//if hostcomponent div dom
		this.stateNode = null;
		//FunctionCompoennt () => {}
		this.type = null;

		//generate tree structure
		//point to parent fiberNode
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		this.ref = null;

		//work unit
		this.pendingProps = pendingProps; //start working
		this.memorizedProps = null; // finish working
		this.alternate = null;
		this.flags = NoFlags;
	}
}
