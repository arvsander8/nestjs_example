import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    
    
    @Get()
    getTasks(){
        return 'Retornando Tareas';
    }

    @Post()
    createTask(@Body() task){
        console.log(task);
        return 'Creating a task';
    }
    
}
