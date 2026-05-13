/*
    ERROR => 错误 
*/
function renderError(props) {
    const {
        oApp,
        text = '网络错误'
    } = props;
    
    oApp.innerHTML = `
            <div class="page-status">${text}</div>
        `;
}

export default renderError;