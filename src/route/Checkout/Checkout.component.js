import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import CheckoutProgressbar from 'src/component/CheckoutProgressbar';

import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.style';

/** @namespace Test/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderProgressBar(showOnMobile = false) {
        const { isMobile, checkoutStep } = this.props;
        if (!showOnMobile && isMobile) {
            return null;
        }

        return (
            <CheckoutProgressbar currentStep={ checkoutStep } />
        );
    }

    render() {
        return (
          <main block="Checkout">
            { this.renderProgressBar() }
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
              { this.renderSummary(true) }
              <div block="Checkout" elem="Step">
                { this.renderTitle() }
                { this.renderGuestForm() }
                { this.renderStep() }
                { this.renderLoader() }
              </div>
              <div>
                { this.renderSummary() }
                { this.renderPromo() }
                { this.renderCoupon() }
              </div>
            </ContentWrapper>
          </main>
        );
    }
}

export default CheckoutComponent;
