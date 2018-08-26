import Node from './Node';

export function getRef(){		
	var node = new Node(true,0,"test",[]);
	console.log(node.getParent())
};


