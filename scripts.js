var todos = [
    // {
    //   text: 'tarefa 1',
    //   done: true
    // },
    // {
    //   text: 'tarefa 2',
    //   done: false  
    // },
    // {
    //   text: 'tarefa 3',
    //   done: false
    // }
];

const todosApp = {

    data() {
        return {
            todos: [],//window.todos,//[], //windows.todos
            information: "Crie sua Lista de tarefas e gerencie.",
            newTodo: {
              text: '',  
              done: false,    
            }
        }
    },
    methods: {
        deleteAllTask: function() {
          this.todos = [];
          localStorage.removeItem("@todo-tasks-vue");
        },
        updateTask: function() {
          localStorage.setItem("@todo-tasks-vue", JSON.stringify(this.todos));
        },
        addNewtodo: function() {
         
         if(this.newTodo.text != "") {
        
            this.todos.push(this.newTodo);
            this.newTodo = {
               done : false,
            }
            localStorage.setItem("@todo-tasks-vue", JSON.stringify(this.todos));
         } else {
            alert("Preencha o campo texto para adicionar uma tarefa!");
         }   

         let todosPrint = localStorage.getItem("@todo-tasks-vue");
         let todosProcess = JSON.parse(todosPrint);
         console.log(todosProcess);
          
        },
    },
    beforeCreate() { //executa antes de criar
      console.log("Before Create");
    },
    created() { //executa depois de criar o html - INIT DA APLICAÇÃO QUE PODE CHAMAR FUNCIONALIDADES E POPULAR CAMPOS
      console.log("Created");
      let todosExist = localStorage.getItem("@todo-tasks-vue");
      if(todosExist) {
        let todosProcess = JSON.parse(todosExist);
      
        if(todosProcess.length > 0) {
          this.todos = todosProcess;
        }
      }

    },
    beforeUpdate() { //executa apos atualizar algo da DOM html
      console.log("Before Update");
    }

};


Vue.createApp(todosApp).mount('#app');