import useTranslation from 'next-translate/useTranslation';
export default function Blog() {
    const { t, lang } = useTranslation('common')

    return <h1>{t('hello_blog')}</h1>
}