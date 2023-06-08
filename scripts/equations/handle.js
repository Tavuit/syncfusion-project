Object.entries(EQUATIONS_DATA).forEach(item => {
  if (!item[1]) {
    // $(`#${item[0]}`).attr('style', 'display: none !important');
  } else {
    $(document).on("click", `#${item[0]}`, () => {
      handleEquation(item[1])
      if (item[0] === 'Dropdown_Function_1') {
        styleMathLive()
      }
    })
  }
})