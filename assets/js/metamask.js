// check if wallet is already connected

window.onload = () => {
    checkAccountIsConnected();
}


/*-- Connect Wallet Js --*/
const checkAccountIsConnected = async () => {
    if (isMetaMaskInstalled()) {
        const activeAccounts = await isAccountConnected();
        if (activeAccounts.length !== 0) {
            if (window.location.pathname === "/index5.html") {
                $('.connect-btn-wrapper').html(`
                  <button class="outline-btn connect-btn uppercase border-green20 text-green flex align-center justify-center" data-bs-toggle="modal" data-bs-target="#connect-wallet-modal"><img src="./assets/images/icon/empty-wallet.svg" alt="icon" class="uig-mr-13" />${activeAccounts[0].substr(0, 10)}</button>
              `);
            } else {
                $('.connect-btn-wrapper').html(`
                  <button class="outline-btn connect-btn uppercase border-green20 text-green flex align-center justify-center" data-bs-toggle="modal" data-bs-target="#connect-wallet-modal"><img src="./assets/images/icon/empty-wallet.svg" alt="icon" class="uig-mr-13" />${activeAccounts[0].substr(0, 10)}</button>
              `);
            }
        }
    }
}


//connect meta
$('.connect-meta').on('click', async function () {
                if (isMetaMaskInstalled()) {
                    const activeAccounts = await connectWallet();
                    if (activeAccounts.length !== 0) {
                        $('#connectModal').modal('hide');
                        $('body').removeClass('modal-open');
                        $('.modal-backdrop').remove();
                        if (window.location.pathname === "/index5.html") {
                            $('.connect-btn-wrapper').html(`
                  <button class="outline-btn connect-btn uppercase border-green20 text-green flex align-center justify-center" data-bs-toggle="modal" data-bs-target="#connect-wallet-modal"><img src="./assets/images/icon/empty-wallet.svg" alt="icon" class="uig-mr-13" />${activeAccounts[0].substr(0, 10)}</button>
              `);
                        } else {
                            $('.connect-btn-wrapper').html(`
                  <button class="outline-btn connect-btn uppercase border-green20 text-green flex align-center justify-center" data-bs-toggle="modal" data-bs-target="#connect-wallet-modal"><img src="./assets/images/icon/empty-wallet.svg" alt="icon" class="uig-mr-13" />${activeAccounts[0].substr(0, 10)}</button>
              `);
                        }
                    }
                } else {
                    $('#connectModal').modal('hide');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    $('#download-metamask').modal('show');
                }
})