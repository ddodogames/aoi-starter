module.exports = {
    name: "test2",
    code: `
    $sendMessage[$test2]
    $wait[3s]
    $sendMessage[$test1]`
}
