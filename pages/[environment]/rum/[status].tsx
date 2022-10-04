import { GetServerSideProps } from "next"

interface RumPageProps {
    test: string,
    status: number,
    environment: string
}

const Rum = ({test, status, environment}: RumPageProps) => {
    return <>
        <h1>{ environment}: Rum snippet here: {status}</h1>
    </>
}


export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
    const { status, environment } = query

    res.statusCode = parseInt(status as string)

    return {
        props: { 
            test: "test",
            status,
            environment
        }
    }
}

export default Rum