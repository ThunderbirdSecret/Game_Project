import { Topic } from "./sequelize";
import { app } from "./index";

//Создать топик
app.post('/topic', async (req, res) => {
    try{
        const { title } = req.body
        
        const topic = await Topic.create({title})

        res.status(201).json(topic)
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при создании топика' });
      }
})
