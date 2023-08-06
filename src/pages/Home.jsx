import Header from '../components/Header'
import Feed from '../components/Feed'
import Top from '../components/Top'


function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="feed">
                    <Top />
                    <hr />
                    <Feed />
                </section>

                <section className="right-sidebar">
                    <p>Tags</p>
                    <hr />
                </section>
            </main>
        </>
    )
}

export default Home;