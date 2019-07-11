describe('addBusinessTime', ()=>{

    const holiday = {
        start: new Date('2019-12-24T21:00:00'),
        end: new Date('2019-12-25T21:00:00')
    };

    it('should return selected time plus duration when is not holiday', ()=>{
        const expectedDate = new Date('2019-12-01T01:00:00');
        date =  addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60);
        expect(date).toEqual(expectedDate);
    });

    it('should return holiday.end plus duration when selected time is starting holiday', ()=>{
        const expectedDate = new Date('2019-12-25T21:00:01');
        date =  addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1);
        expect(date).toEqual(expectedDate);
    });

    it('should return holiday.end plus remaining duration when selected time start before or equal holiday.star', ()=>{
        const expectedDate = new Date('2019-12-25T21:30:00');
        date =  addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60);
        expect(date).toEqual(expectedDate);
    });

    it('should return holiday.end plus duration when selected time is between holiday', ()=>{
        const expectedDate = new Date('2019-12-25T21:00:01');
        date =  addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1);
        expect(date).toEqual(expectedDate);
    });

    it('should return holiday.start minus duration time when selected time is between holiday', ()=>{
        const expectedDate = new Date('2019-12-24T20:59:59');
        date =  addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1);
        expect(date).toEqual(expectedDate);
    });

});
