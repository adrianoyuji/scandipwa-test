import {
    BILLING_STEP,
    DETAILS_STEP
} from '@scandipwa/scandipwa/src/route/Checkout/Checkout.config';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgressbar.style';

/** @namespace Test/Component/CheckoutProgressbar/Component/CheckoutProgressbarComponent */
export class CheckoutProgressbarComponent extends PureComponent {
  static propTypes = {
      currentStep: PropTypes.string.isRequired
  };

  renderProgressItem({ isFinished, title, index }) {
      return (
        <div
          className="ProgressBarItem"
        >
          <span
            className={ `ProgressBarItemCircle ${
                isFinished ? 'Finished' : 'Unfinished'
            }` }
          >
            { index }
          </span>
          <span
            className={ `ProgressbarItemTitle ${isFinished || 'UnfinishedTitle'}` }
          >
            { title }
          </span>
        </div>
      );
  }

  renderLine({ isFinished }) {
      return (
           <div
             className={ `ProgressLine ${
                 isFinished ? 'Finished' : 'Unfinished'
             } MiddleLine` }
           />
      );
  }

  render() {
      const { currentStep } = this.props;
      return (
        <div className="Progressbar">
          { this.renderLine({ isFinished: true }) }
          { this.renderProgressItem({
              isFinished: true,
              title: 'Shopping',
              index: 1
          }) }
          { this.renderLine({ isFinished: (currentStep === BILLING_STEP || currentStep === DETAILS_STEP) }) }
          { this.renderProgressItem({
              isFinished: currentStep === BILLING_STEP || currentStep === DETAILS_STEP,
              title: 'Review & Payments',
              index: 2
          }) }
          { this.renderLine({ isFinished: currentStep === DETAILS_STEP }) }
        </div>
      );
  }
}

export default CheckoutProgressbarComponent;
