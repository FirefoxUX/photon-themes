import React from 'react';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import * as utils from '../utils';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'left';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'right';
}

export default function Banner({ location }) {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        playScale={0.9}
      >
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
          <h2 key="h2">photon<p>-ant</p></h2>
          <p key="content"><FormattedMessage id="app.home.slogan" /></p>
          <span className="line" key="line" />
          <div key="button1" className="start-button">
            <Link to={utils.getLocalizedPathname('/components/button/', isZhCN)}>
              <Button type="primary" size="large">
                <FormattedMessage id="app.home.start" />
              </Button>
            </Link>
          </div>
        </QueueAnim>
      </ScrollElement>
    </section>
  );
}
