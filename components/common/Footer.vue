<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col=sm-12">
          <a class="footer-logo" href="#">
            <p>Amino</p>
          </a>
        </div>

        <div class="col-6 col-md-3">
          <h4 class="footer-ttl">Магазин</h4>
          <ul class="footer-list">
            <li class="footer-item"><a href="#">Акции</a></li>
            <li class="footer-item"><a href="#">Оплата и доставка</a></li>
            <li class="footer-item"><a href="#">Статьи</a></li>
            <li class="footer-item"><a href="#">Контакты</a></li>
            <li class="footer-item"><a href="#">О нас</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3 footer-products">
          <h4 class="footer-ttl">Продукты</h4>
          <ul class="footer-list">
            <li class="footer-item"><a href="/">Все категории</a></li>
            <li class="footer-item"><a href="/">Спортивное питание</a></li>
            <li class="footer-item"><a href="/">Аминокислоты</a></li>
            <li class="footer-item"><a href="/">Аксессуары</a></li>
            <li class="footer-item"><a href="/">Бренды</a></li>
          </ul>
        </div>

        <div class="col-md-4 col-sm-12">
          <h4 class="footer-ttl">Свяжитесь с нами</h4>
          <p class="footer-contacts-txt">
            Принимаем звонки в будние дни с 8:00 до 23:00
          </p>
          <div class="footer-contacts-txt">
            <img src="@/assets/svg/phone.svg" alt="" />
            <a href="tel:+38(098)124-45-67" class="footer-contacts-txt _dot">+38 (098) 124-45-67</a>
            <img src="@/assets/svg/message.svg" alt="" />
            <a href="mailto:amino@gmail.com" class="footer-contacts-txt">amino@gmail.com</a>
          </div>
          <div class="footer-contacts-subscribe">
            <b-form-input placeholder="Номер телефона"></b-form-input>
            <b-button variant="primary">Позвоните мне</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-hr d-md-none"></div>
    <div class="container">
      <div class="footer-info">
        <div class="footer-info-left">
          <img src="@/assets/svg/visa.svg" alt="">

          <img src="@/assets/svg/mastercard.svg" alt="">
        </div>
        <div class="footer-copyright-logo d-block d-md-none">
          <img src="@/assets/svg/logo-buro97.svg" alt="">
        </div>
        <div class="footer-info-right">
          <a href="/" class="footer-info-link">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.836 24.836 32 16 32C7.164 32 0 24.836 0 16C0 7.164 7.164 0 16 0C24.836 0 32 7.164 32 16ZM16.5733 11.812C15.0173 12.4587 11.9067 13.7987 7.24267 15.8307C6.48533 16.132 6.088 16.4267 6.052 16.7147C5.99067 17.2027 6.60133 17.3947 7.43067 17.6547C7.544 17.6907 7.66133 17.7267 7.78133 17.7667C8.59867 18.032 9.69733 18.3427 10.268 18.3547C10.7867 18.3653 11.3653 18.152 12.004 17.7147C16.3613 14.772 18.6107 13.2853 18.752 13.2533C18.852 13.2307 18.9907 13.2013 19.084 13.2853C19.1773 13.368 19.168 13.5253 19.1587 13.568C19.0973 13.8253 16.7053 16.0507 15.4653 17.2027C15.0787 17.5613 14.8053 17.816 14.7493 17.8747C14.624 18.004 14.496 18.128 14.3733 18.2467C13.6133 18.9773 13.0453 19.5267 14.4053 20.4227C15.0587 20.8533 15.5813 21.2093 16.1027 21.564C16.672 21.952 17.24 22.3387 17.976 22.8213C18.1627 22.944 18.3413 23.0707 18.516 23.1947C19.1787 23.668 19.7747 24.092 20.5107 24.0253C20.9373 23.9853 21.38 23.584 21.604 22.3853C22.1333 19.5507 23.176 13.412 23.4173 10.8813C23.432 10.6712 23.4231 10.4601 23.3907 10.252C23.3713 10.0839 23.2894 9.92924 23.1613 9.81867C22.9707 9.66267 22.6747 9.62933 22.5413 9.632C21.94 9.64267 21.0173 9.964 16.5733 11.812Z" fill="#1A232B"/>
            </svg>
          </a>

          <a href="/" class="footer-info-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.998 5.3322C6.52901 5.3322 5.3302 6.53101 5.3302 8C5.3302 9.46899 6.52901 10.6678 7.998 10.6678C9.46699 10.6678 10.6658 9.46899 10.6658 8C10.6658 6.53101 9.46699 5.3322 7.998 5.3322ZM15.9994 8C15.9994 6.89525 16.0094 5.80051 15.9474 4.69777C15.8853 3.4169 15.5931 2.28014 14.6565 1.3435C13.7179 0.404868 12.5831 0.114672 11.3022 0.0526304C10.1975 -0.0094115 9.10274 0.000595291 8 0.000595291C6.89525 0.000595291 5.80051 -0.0094115 4.69777 0.0526304C3.4169 0.114672 2.28014 0.40687 1.3435 1.3435C0.404868 2.28214 0.114672 3.4169 0.0526304 4.69777C-0.0094115 5.80252 0.000595291 6.89725 0.000595291 8C0.000595291 9.10275 -0.0094115 10.1995 0.0526304 11.3022C0.114672 12.5831 0.40687 13.7199 1.3435 14.6565C2.28214 15.5951 3.4169 15.8853 4.69777 15.9474C5.80252 16.0094 6.89725 15.9994 8 15.9994C9.10475 15.9994 10.1995 16.0094 11.3022 15.9474C12.5831 15.8853 13.7199 15.5931 14.6565 14.6565C15.5951 13.7179 15.8853 12.5831 15.9474 11.3022C16.0114 10.1995 15.9994 9.10475 15.9994 8ZM7.998 12.1048C5.72646 12.1048 3.89323 10.2715 3.89323 8C3.89323 5.72847 5.72646 3.89523 7.998 3.89523C10.2695 3.89523 12.1028 5.72847 12.1028 8C12.1028 10.2715 10.2695 12.1048 7.998 12.1048ZM12.2709 4.68576C11.7405 4.68576 11.3122 4.25747 11.3122 3.72711C11.3122 3.19675 11.7405 2.76847 12.2709 2.76847C12.8012 2.76847 13.2295 3.19675 13.2295 3.72711C13.2297 3.85305 13.205 3.97778 13.1569 4.09416C13.1088 4.21054 13.0382 4.31628 12.9491 4.40533C12.8601 4.49438 12.7543 4.56499 12.6379 4.61311C12.5216 4.66123 12.3968 4.68592 12.2709 4.68576Z" fill="#EAEEF2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-hr d-none d-md-block"></div>
    <div class="container">
      <div class="footer-copyright">
        <div class="footer-copyright-info">
          <span class="footer-copyright-txt">© Amino 2021. Все права защищены</span>
          <a href="/">Условия использования</a>
          <span class="footer-copyright-dot"></span>
          <a href="/">Политика конфиденциальности</a>
        </div>
        <div class="footer-copyright-logo d-none d-md-block">
          <img src="@/assets/svg/logo-buro97.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
</style>