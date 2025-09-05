import { useState } from 'react';

import Title from '../components/title';
import Input from '../components/input';
import Container from '../components/container';
import MyButton from '../components/myButton';
import AddTask from '../components/addTask';
import List from '../components/list'

export default function App() {
    type Task = { id: number; text: string };
    const [tasks, setTasks] = useState<Task[]>([]);
    const [text, setText] = useState("");

    function addTask() {
        const trimmedText = text.trim(); // Tratando o texto - remove os espaços no início e no fim.
        if (!trimmedText) return; // Verifica se há um texto

        setTasks([...tasks, { id: Date.now(), text: trimmedText }]); // Set no array task - cada task é um obj com id e text
        setText(""); // Limpa o input
        console.log("texto do input: ",text);
    }

    return (
        <Container>
            <Title size="h1">Lista de Tarefas</Title>
            <AddTask>
                <Input size='medium' value={text} onChangeText={setText} add={addTask}/>
                <MyButton size='small' onPress={addTask}>Adicionar</MyButton>
            </AddTask>
            <List tasks={tasks}>
                
            </List>
        </Container>
    );
}