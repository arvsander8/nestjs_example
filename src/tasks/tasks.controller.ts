import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    
    
    @Get()
    getTasks(){
        return 'Retornando Tareas';
    }

    @Post()
    createTask(@Body() task:CreateTaskDto): string{
        console.log(task.description);
        return 'Creating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string{
        console.log(task);
        console.log(id);
        return 'Updating a task';
    }
    
}
