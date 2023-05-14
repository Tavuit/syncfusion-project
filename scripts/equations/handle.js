Object.entries(EQUATIONS_DATA).forEach(item => {
  $(document).on("click", `#${item[0]}`, () => {
    handleEquation(item[1])
  })
})