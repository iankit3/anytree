export default class Node {
	constructor(isRoot=false,id=null,name=null,children=[]){
		this.isRoot = isRoot;
		this.id = id;
		this.name  = name;
		this.children = children; 
	}
        getParent(treeData){
		var pathData = [{id : treeData[0].id , name : treeData[0].name}];
		if(this.id == 0) return 0;
		else {
			var idArray = this.id.split(".");
			var currentTreeNode = treeData;
			idArray.map((e,i) => {
				if(i < idArray.length - 1 || i == 0)
				 return;//don't access the first elem && the last elem 
				currentTreeNode = currentTreeNode[e];
				pathData.push({id:currentTreeNode.id , name : currentTreeNode.name});
			})
		}	
	}
} 
