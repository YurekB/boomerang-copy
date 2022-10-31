const Footer = () => {
  return (
    <footer>
      <div class="footer3">
        <ul class="footer3images">
          <li>
            <img src="/images/phone.png" alt="phone symbol" />
          </li>
          <li>
            <img src="/images/mail.png" alt="mail symbol" />
          </li>
          <li>
            <img src="/images/location.png" alt="location symbol" />
          </li>
        </ul>
        <div class="footer3words">
          <p>01743 649888</p>
          <p>hello@goboomerang.co.uk</p>
          <p>12 Yeomanry Road, Battlefield, SY1 3EH</p>
        </div>
      </div>
      <div class="infoSegments">
        <div class="segment1">
          <h5>Head Office</h5>
          <p>
            12 Yeomanry Road
            <br />
            Battlefield
            <br />
            Shrewsbury
            <br />
            SY1 3EH
          </p>
        </div>
        <div class="segment2">
          <h5>Enquiries</h5>
          <p>
            Email: hello@goboomerang.co.uk
            <br />
            Tel: 01743 649888
          </p>
        </div>
        <div class="segment3">
          <h5>Locations</h5>
          <p>
            <b>Birmingham office:</b>
            <br />
            210 St Vincent St Ladywood
            <br />
            Birmingham, B16 8RP
          </p>
        </div>
        <div class="segment4">
          <h5>Newsletter</h5>
          <form>
            <input type="text" placeholder="your email address" />
            <button>SIGN UP</button>
            <p>
              Get the latest Boomerang news and offers directly to your inbox!
            </p>
          </form>
        </div>
      </div>
      <ul class="bottomSegments">
        <li class="bs1">
          <p>
            Boomerang Vehicle Rental Limited. Company No: 10749488
            <br />
            ICO number: ZA759674
          </p>
        </li>
        <li class="bs2">
          <img src="/images/fb.png" alt="facebook logo" />
        </li>
        <li class="bs3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img src="/images/up.png" alt="back to top arrow" />
            <p>Back to top</p>
          </button>
        </li>
      </ul>
      <div class="bottomSection">
        <div class="btmTop">
          <p class="copy">© 2021 Boomerang. All rights reserved.</p>
          <div class="bt2">
            <p class="dvBy">Developed by</p>
            <img class="btimg" src="/images/opop.png" alt="opop logo" />
          </div>
        </div>
        <p class="btm">
          Privacy Policy&nbsp; &nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;GDPR
          Statement&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Website Terms and
          Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
