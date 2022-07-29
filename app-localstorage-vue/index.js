const app = new Vue({
    el: '#app',
    data: {
        titulo: 'App tareas en Vue',
        tareas: [],
        nuevaTarea: ''
    },
    created: function(){
        let localstorage = JSON.parse(localStorage.getItem('app-vue'))
        if(localstorage === null){
            this.tareas = []
        }else{
            this.tareas = localstorage
        }
    },
    methods: {
        addTarea: function(){
            //console.log('Escribiste: ', this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas)
            this.nuevaTarea = '';
            localStorage.setItem('app-vue', JSON.stringify(this.tareas))
        },
        editTarea: function(index){
            //console.log(index)
            this.tareas[index].estado = true
            localStorage.setItem('app-vue', JSON.stringify(this.tareas))
        },
        removeTarea: function(index){
            this.tareas.splice(index, 1)
            localStorage.setItem('app-vue', JSON.stringify(this.tareas))
        }
    }
})