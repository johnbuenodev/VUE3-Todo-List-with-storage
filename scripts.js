var todos = [
    {
      text: 'tarefa 1',
      done: true
    },
    {
      text: 'tarefa 2',
      done: false  
    },
    {
      text: 'tarefa 3',
      done: false
    }
];

const todosApp = {

    data() {
        return {
            todos: window.todos,//[], //windows.todos
            information: "Crie sua Lista de tarefas e gerencie.",
            newTodo: {
              text: '',  
              done: false,    
            }
        }
    },
    methods: {
        addNewtodo: function() {
         
         if(this.newTodo.text != "") {
        
            this.todos.push(this.newTodo);
            this.newTodo = {
               done : false,
            }
         } else {
            alert("Preencha o campo texto para adicionar uma tarefa!");
         }   
          
        },
    },

};


Vue.createApp(todosApp).mount('#app');