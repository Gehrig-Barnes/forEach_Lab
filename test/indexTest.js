describe('index.js', function () {
    describe('addOne()', function() {
        it('returns an array that adds one to each element using numbers array', function(){
            expect(addOne()).to.have.all.members(
                [2,3,4,5,6]
            )
        })
    })
})

describe('index.js', function () {
    describe('subtractOne()', function() {
        it('returns an array that subtracts one of each element from numbers array', function(){
            expect(subtractOne()).to.have.all.members(
                [0,1,2,3,4]
            )
        })
    })
})