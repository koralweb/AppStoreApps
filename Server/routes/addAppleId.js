import {Router} from "express";
import appleIds from "../models/appleIds.js";

const router = Router()

router.post('/addAppleId', async (req, res) => {
    const appleId = new appleIds({
        email: 'test@mail.ru',
        password: '1234qwerasd',
        phone: '+79765432219'
    })
    try {
        await appleId.save()
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
})


export default router
