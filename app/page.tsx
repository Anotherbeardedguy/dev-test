export default function Home() {
  return (
    <main>
      <header><a className="brand" href="/">✳ <span>Launch check</span></a><span className="tag">NEXT.JS TEST APP</span></header>
      <section aria-labelledby="title">
        <span className="status"><span aria-hidden="true" /> Page is running</span>
        <h1 id="title">Small app.<br /><span>Ready for takeoff.</span></h1>
        <p>Your deployment test starts here. A simple page, a working server, and a little peace of mind.</p>
        <a className="button" href="/api/health">Check server health <span aria-hidden="true">↗</span></a>
        <div className="details"><div><span>FRAMEWORK</span><strong>Next.js</strong></div><div><span>ROUTING</span><strong>App Router</strong></div><div><span>SETUP</span><strong>Zero config</strong></div></div>
      </section>
      <footer><span>Built to test. Ready to deploy.</span><span>01 / Launch check</span></footer>
    </main>
  );
}
