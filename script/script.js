document.addEventListener('DOMContentLoaded', () => {


    const tabs = () => {
       const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
       const cardDetailsTitleElem = document.querySelector('.card-details__title');
       const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemory = document.querySelector('.description__memory');
       
        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 28990,
                memoryROM: 128
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img: 'img/iPhone-silver.png',
                price: 33990,
                memoryROM: 128
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 35990,
                memoryROM: 256
            },
        ];

        const deactivate = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
        }
        
        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactivate();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + '₴';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
                }
            });
        })

    }


    const accordion = () => {
        const characteristicsListElem = document.querySelector('.characteristics__list');
        const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

        const open = (button, dropDown) => {
            closeAllDrops(button, dropDown);
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            button.classList.add('active');
            dropDown.classList.add('active');
        };

        const close = (button, dropDown) => {
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        const closeAllDrops = (button, dropDown) => {
            characteristicsItemElems.forEach((elem) => {
                if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1]);
                }
            })
        };

        characteristicsListElem.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');

                description.classList.contains('active') ? close(target, description) : open(target, description);
            }
        });

        document.body.addEventListener('click', e => {
            const target = e.target;
            if (!target.closest('.characteristics__list')) {
                closeAllDrops();
            }
        })
    };

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const modal = document.querySelector('.modal');

        const openModal = () => {
            modal.classList.add('open');
            document.addEventListener('keydown', escapeHandler);
        };
        const closeModal = () => {
            modal.classList.remove('open');
            document.removeEventListener('keydown', escapeHandler);
        };

         const escapeHandler = e => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('modal__close') || target === modal ) {
                closeModal();
            }
        });

        cardDetailsButtonBuy.addEventListener('click', openModal);

        cardDetailsButtonDelivery.addEventListener('click', openModal);

    }


    tabs();
    accordion();
    modal();
});