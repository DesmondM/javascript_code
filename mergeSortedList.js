const mergeList =(lists)=>{
    let result =[];

    for(let i=0; i<lists.length; i++){
        let curr = lists[i];
        while(curr){
            result.push(curr.val);
            curr= curr.next
        }
    }
    result.sort((a,b)=>a-b);
    let dummyNode = new ListNode(-1);
    let r = dummyNode;

    for(let i=0; i<result.length; i++){
        dummyNode.next = new ListNode(result[i]);
        dummyNode = dummyNode.next
    }
}

console.log(mergeList([[1,4,5], [1,3,4],[2,6.7]]))