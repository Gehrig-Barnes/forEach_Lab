describe('index.js', function () {
    describe('addOne()', function() {
        it('returns an array that adds one to each element of original array', function(){
            expect(addOne()).to.have.all.members(
                [2,3,4,5,6]
            )
        })
    })
})