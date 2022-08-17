

class htmlOuter {
    constructor() {
        htmlOuter.content = ''
    }
    appendList(dataList,itemTitle) {
        if (typeof dataList != 'object')
            return

        let lis = ''
        for (let k in dataList) {
            let value = dataList[k];
            lis += `<li>
                    <span class="ho-name">${k}</span>
                    <span class="ho-value">${value}</span>
                 </li>`
        }
        let list = `<div class="ho-com">
                <h4>${itemTitle}</h4>
                <ul>
                    ${lis}
                </ul></div>
             `;
        htmlOuter.content += list;
    }

    appendTable(columns, dataList, itemTitle = '') {
        if (!dataList.length || !columns.length)
            return

        let ths = '';
        let trs = ''
        columns.forEach(d => {
            ths += `<th >${d.title}</th>`
        })
        dataList.forEach(d => {
            trs += '<tr>'
            columns.forEach(x => {
                trs += `<td>${d[x.key] || ''}</td>`
            })
            trs += '</tr>'
        })
        htmlOuter.content += `<div class="ho-com">
            <h4>${itemTitle}</h4>
            <table>
                <thead> ${ths}</thead>
                <tbody>${trs}</tbody>
            </table></div>
        `
    }

    appendHtml(html,itemTitle) {
        htmlOuter.content += `<div class="ho-com">
            <h4>${itemTitle}</h4>
          ${html}
          </div>
        `
    }
    appendImage(imgUrl,itemTitle) {
        htmlOuter.content += `<div class="ho-com">
            <h4>${itemTitle}</h4>
          <img src="${imgUrl}">
          </div>
        `
    }

    outHtml(title = 'create-html') {

        return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
                <style>
                    html,body{
                        height:100%;
                        width:100%;
                        margin: 0;
                        padding: 0;
                        clear: both;
                        background: #f9f9f9;
                    }
                    body{
                    overflow-y: auto;
                        overflow-x: hidden;
                    }
                    .ho-top{
                        height:55px;
                        line-height:55px;
                        text-align: left;
                        font-size: 24px;
                        width:100%;
                        background: #092149;
                        color:#fff;
                        padding: 0 20px;
                    }
                    #htmlOuter{
                        width:1300px;
                        padding-top:14px;
                        margin: 0 auto;
                    }
                    h4{
                        text-align: left;
                        width: 100%;
                        margin: 0;
                        line-height: 35px;
                    }
                    img{
                        width: 100%;
                    }
                    .ho-com{
                        width:100%;
                        min-height:150px;
                        border:1px solid #ccc;
                        background: #fff;
                        padding: 12px 20px;
                        margin-bottom: 10px;
                    }
                    ul{
                    margin: 0;
                    padding: 0;
                   
                    }
                    li{
                    float:left;
                    width:100%;
                    line-height: 28px;
                    list-style: none;
                    }
                    .ho-name{
                        width:85px;
                        float:left;
                    }
                    .ho-value{
                        float:left;
                        min-width:150px;
                    }
        table{
 
            border-collapse: collapse;
 
            margin: 0 auto;
 
            text-align: center;
            width:100%;
 
        }
 
        table td, table th
 
        {
 
            border: 1px solid #c9c9c9;
 
            color: #666;
 
            height: 30px;
            padding-left: 8px;
 
        }
 
        table thead th
 
        {
 
            background-color: #eeeeee;
 
            width: 100px;
 
        }
 
        table tr:nth-child(odd)
 
        {
 
            background: #fff;
 
        }
 
        table tr:nth-child(even)
 
        {
 
            background: #f6f6f6;
 
        }
                </style>
            </head>
            <body>
                <div class="ho-top"><span>${title}</span></div>
                <div id="htmlOuter">${htmlOuter.content || ''}</div>
            </body>
        </html>
    
    `
    }
}

export default htmlOuter