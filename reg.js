function validateForm () {
    var name = document.forms['spdbForm']['name'].value
    var id = document.forms['spdbForm']['id'].value
    var phone = document.forms['spdbForm']['phone'].value
    var nameReg = /^[\u4e00-\u9fa5]+$/
    var idReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
    var phoneReg = /^[1]([3-9])[0-9]{9}$/
    var code = document.forms['spdbForm']['code'].value
    if (!name) {
      alert('请输入姓名!')
      return false
    }
    if (!name.match(nameReg)) {
      alert('姓名只能输入中文!')
      return false
    }
    if (name.length > 20) {
      alert('姓名不能超过二十个字!')
      return false
    }
    if (!id) {
      alert('请输入身份证号!')
      return false
    }
    if (!id.match(idReg)) {
      alert('请输入正确的身份证号!')
      return false
    }
    if (!phone) {
      alert('请输入手机号!')
      return false
    }
    if (!phone.match(phoneReg)) {
      alert('请输入正确的手机号!')
      return false
    }
    if (!code) {
      alert('请输入邀请码!')
      return false
    }
  } 