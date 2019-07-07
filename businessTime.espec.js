describe('addBusinessTime', ()=>{

    const holiday = {
        start: new Date('2019-12-24T21:00:00'),
        end: new Date('2019-12-25T21:00:00')
    };

    it('should return selected time plus duration when is not holiday', ()=>{
        date =  addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60);
        expect(date.toISOString()).toEqual('2019-12-01T01:00:00.000Z');
    });

    it('should return holiday.end plus duration when selected time is starting holiday', ()=>{
        date =  addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1);
        expect(date.toISOString()).toEqual('2019-12-25T21:00:01.000Z');
    });

    it('should return holiday.end plus remaining duration when selected time start before or equal holiday.star', ()=>{
        date =  addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60);
        expect(date.toISOString()).toEqual('2019-12-25T21:30:00.000Z');
    });

    it('should return holiday.end plus duration when selected time is between holiday', ()=>{
        date =  addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1);
        expect(date.toISOString()).toEqual('2019-12-25T21:00:01.000Z');
    });

    it('should return holiday.start minus duration time when selected time is between holiday', ()=>{
        date =  addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1);
        expect(date.toISOString()).toEqual('2019-12-24T20:59:59.000Z');
    });

});