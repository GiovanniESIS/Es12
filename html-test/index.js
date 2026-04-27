import LZString from 'https://cdn.jsdelivr.net/npm/lz-string@1.4.4/+esm'

function goCodeSandBox(elx) {

  const el =elx.closest('.card').querySelector('.answer code')
    const data = {
      files: {
        'index.html': {
          content: '<script>' + el.innerText + '</script>',
        },
      },
    }

    const json = JSON.stringify(data)

    const encoded = LZString.compressToBase64(json)

    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${encodeURIComponent(encoded)}`

    window.open(url , '_blank')

}


window.goCodeSandBox = goCodeSandBox