import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

export async function POST(req: Request) {
    const body = await req.json();
    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({ message: '유효하지않은 형식' }), {
            status: 400,
        });
    }

    return sendEmail(body)
        .then(
            () =>
                new Response(
                    JSON.stringify({ message: '메일을 발송 했습니다.' }),
                    {
                        status: 200,
                    }
                )
        )
        .catch((err) => {
            console.log(err);
            return new Response(
                JSON.stringify({ message: '메일 발송을 실패 했습니다.' }),
                {
                    status: 500,
                }
            );
        });
}
