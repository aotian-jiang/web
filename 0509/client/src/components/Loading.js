/*
    loading => 加载中 => 让用户感知你在给他干活
*/
function renderLoading(props) {
    const { oApp, text = "加载中" } = props;

    oApp.innerHTML = `
            <div class="page-status">${ text }</div>
        `;
};

export default renderLoading;