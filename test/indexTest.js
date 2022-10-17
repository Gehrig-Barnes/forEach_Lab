const sinon = require( 'sinon' )

describe('index.js', function () {
    let spy
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
        spy.restore();
    })
    
    
   
    describe('addOne()', function() {
        it( 'adds one to each number', () => {
            addOne( [1,2,3,4,5] );
            expect( spy.calledWithExactly( 2 ), "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6" )
            .to.be.true;
            expect( spy.calledWithExactly( 3 ), "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6" )
            .to.be.true;
            expect( spy.calledWithExactly( 4 ), "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6" )
            .to.be.true;
            expect( spy.calledWithExactly( 5 ), "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6" )
            .to.be.true;
            expect( spy.calledWithExactly( 6 ), "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6" )
            .to.be.true;
        } );
    })
})

describe('index.js', function () {
    let spy
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
        spy.restore();
    })
   
    describe('subtractOne()', function() {
        it( 'subtracts one from each number', () => {
            subtractOne( [1,2,3,4,5] );
            expect( spy.calledWithExactly( 0 ), "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4" )
            .to.be.true;
            expect( spy.calledWithExactly( 1 ), "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4" )
            .to.be.true;
            expect( spy.calledWithExactly( 2 ), "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4" )
            .to.be.true;
            expect( spy.calledWithExactly( 3 ), "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4" )
            .to.be.true;
            expect( spy.calledWithExactly( 4 ), "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4" )
            .to.be.true;
        } );
    })
})



// describe('index.js', function () {
//     describe('addOne()', function() {
//         it('returns an array that adds one to each element using numbers array', function(){
//             expect(addOne()).to.have.all.members(
//                 [2,3,4,5,6]
//             )
//         })
//     })
// })

// describe('index.js', function () {
//     describe('subtractOne()', function() {
//         it('returns an array that subtracts one of each element from numbers array', function(){
//             expect(subtractOne()).to.have.all.members(
//                 [0,1,2,3,4]
//             )
//         })
//     })
// })