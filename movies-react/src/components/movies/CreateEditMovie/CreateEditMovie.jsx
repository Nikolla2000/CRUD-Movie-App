import { useFormik } from 'formik';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import * as Yup from 'yup';
import { useEffect } from 'react';

const CreateEditMovie = (props) => {
    const { onSubmit, movie, title } = props;

    const formik = useFormik({
        initialValues: {
            title: movie?.title || undefined,
            posterUrl: movie?.posterUrl || undefined,
            description: movie?.description || undefined,
            youtubeId: movie?.youtubeId || undefined,
        }, onSubmit,
        // validateOnBlur: true,
        // validateOnChange: false,
        validationSchema: Yup.object().shape({
            title: Yup
                .string()
                .min(3, 'minimum 3 charatacters')
                .max(10, 'maximum 10 charatacters')
                .required('title is requried'),
            posterUrl: Yup
                .string()
                .required('poster Url is requried'),
            description: Yup
                .string()
                .min(10, 'minimum 10 charatacters')
                .max(50, 'maximum 50 charatacters')
                .required('description is requried'),
            youtubeId: Yup
                .string()
                .required('youtubeId is requried'),
        })
    });

    useEffect(() => {
        const { isSubmitting, touched, errors } = formik;
        console.log({ isSubmitting, touched, errors })
        formik.setErrors({ title: 'this is some error' })
    }, [formik])


    return <div>
        <h1>{title}</h1>
        <form onSubmit={formik.handleSubmit}>
            <Input
                onChangeValue={formik.handleChange}
                name='title'
                placeholder='Terminator'
                label='Movie title'
                value={formik.values.title}
                error={formik.errors.title}
                isTouched={!!formik.touched.title}
            />
            <Input
                onChangeValue={formik.handleChange}
                name='posterUrl'
                placeholder='link ot poster'
                label='Poster url'
                value={formik.values.posterUrl}
                focus={true}
                error={formik.errors.posterUrl}
                isTouched={!!formik.touched.posterUrl}
            />
            <Input
                onChangeValue={formik.handleChange}
                name='youtubeId'
                placeholder='link to youtube trailer'
                label='Youtube id'
                value={formik.values.youtubeId}
                error={formik.errors.youtubeId}
            />
            <TextArea
                onChangeValue={formik.handleChange}
                name='description'
                placeholder='awesome movie'
                label='Description'
                value={formik.values.description}
                error={formik.errors.description}
            />
            <button disabled={formik.isSubmitting || !formik.isValid}>save</button>
        </form>
    </div >
}

export default CreateEditMovie;