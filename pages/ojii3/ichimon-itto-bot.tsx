import Head from 'next/head'
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef } from '../../components/scroll-fade-ref'
import Link from 'next/link'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  return (
    <>
      <Head>
        <title>一問一答bot - OJII3</title>
        <meta lang='ja' />
        <meta name="description"
          content="自作LINE bot「一問一答bot」の紹介ページです。GAS(Google Apps Script)によりサーバーレスかつ無料で運用されています。"
        />
        <link rel="icon" href="/selfmade-icon.jpg" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='py-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <h1>
                一問一答bot
              </h1>
              <b className='text-secondary'>LINE公式アカウント</b>
            </Col>
          </Row>

          <Row className='py-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <p>
                See code in{' '}
                <a target='_brank' href='https://github.com/OJII3/ichimon-itto-bot'>GitHub</a>
              </p>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>Feature</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Useful for learning English words</li></ListGroup.Item>
                <ListGroup.Item><li>Serverless</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>What I used</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Google Apps Script</li></ListGroup.Item>
                <ListGroup.Item><li>LINE Messaging API</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={6}>
              <h2 className='text-center'>Brief</h2>
              <p className='brief'>
                英単語などの暗記のためのbotです。
                無料かつサーバーレスで動かしています。Google Spreadsheetsにデータを蓄積しつつ、
                GASのキャッシュ機能をフル活用することで、比較的高速に応答できます。
              </p>
            </Col>
          </Row>


          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={6}>
              <h2 className='text-center'>Details</h2>
              <p className='brief text-center'>
                当時作成したページがあります。汚いですが。<br />
                GASで動いており、パラメータによりページ遷移をしています。
              </p>
              <p className='text-center py-3'>
                <Button as='a' target='_brank' variant='primary' href='https://script.google.com/macros/s/AKfycbxMFjeqhicoaIMp-h3Fq4JSbfq_FwSgh6bqxhvxUluubPvFSre-v-TpbQnhmm3tmlGDtA/exec?open=ichimon_ittou'>
                  Open
                </Button>
              </p>

            </Col>
          </Row>

          <Row className='justify-content-center p-5' ref={new FadeUpRef().ref}>
            <Col className='col-12 text-center'>
              <h2>Start Using</h2>
              <p className='brief text-center'>
                以下のリンクから実際に使うことができます。
              </p>
            </Col>
            <Col className='col-3 text-center'>
              {/* This is a LINE's image link for adding friend */}
              <Link href="https://lin.ee/l3Nz7HZ">
                <span hidden>Add Friend</span>
                <Image fluid src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
              </Link>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
      <BackToTopButton />
    </>
  )
}
