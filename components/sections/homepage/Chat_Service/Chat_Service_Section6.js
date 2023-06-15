import Link from "next/link";
export default function Chat_Service_Section6() {

    return (
        <>

            <section className="section spdtb">
                <div className="block-blog">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title size-l">Latest News</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <article className="post post-grid">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="Top 6 Membership Sites for Beginners">
                                            <img src="/assets/images/post-01.jpg" alt="Top 6 Membership Sites for Beginners" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Marketing">Marketing</Link>
                                            <Link href="/" title="Creative">Creative</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="Top 6 Membership Sites for Beginners">Top 6 Membership Sites for Beginners</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <article className="post post-grid">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="How to become a web designer in 2022">
                                            <img src="/assets/images/post-02.jpeg" alt="How to become a web designer in 2022" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                            <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="How to become a web designer in 2022">How to become a web designer in 2022</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <article className="post post-grid">
                                    <div className="entry-thumbnail">
                                        <Link href="/" title="20 best affiliate programs for online creators in 2022">
                                            <img src="/assets/images/post-03.jpeg" alt="20 best affiliate programs for online creators in 2022" />
                                        </Link>
                                    </div>
                                    <div className="entry-content">
                                        <div className="entry-category">
                                            <Link href="/" title="Resources">Resources</Link>
                                            <Link href="/" title="Tutorials">Tutorials</Link>
                                        </div>
                                        <div className="entry-title">
                                            <h3><Link href="/" title="20 best affiliate programs for online creators in 2022">20 best affiliate programs for online creators in 2022</Link></h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}