describe 'info page about serie', type: :feature do
    before do
        visit '/greys-anatomy.html'
    end

    it 'displays header on serie page' do
        expect(page).to have_css ('#header')
    end

    it 'displayes footer on serie page' do
        expect(page).to have_css ('#footer')
    end

    it 'displays picture of serie' do
        expect(page).to have_css ('.img')
    end

    it 'displays title of serie' do
        expect(page).to have_css ('.headline')
    end

    it 'displays synopsis of serie' do
        expect(page).to have_css ('.description')
    end

    it 'displays year and category of serie' do
        expect(page).to have_css ('.year')
    end
end