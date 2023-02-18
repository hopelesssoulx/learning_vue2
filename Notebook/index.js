var app = new Vue({
    el:"#todoapp",
    data:{
        list: ["code", "eat", "sleep"],
        inputValue: "keyup action"
    },
    methods: {
        add:function(){
            this.list.push(this.inputValue);
        },
        del:function(index){
            this.list.splice(index, 1);
        },
        clear_all(){
            this.list = [];
        }
    }
})