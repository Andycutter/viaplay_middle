describe 'Landing Page', type: :feature do
    before do
        visit '/'
    end

    it 'displays a header on landing page' do
        expect(page).to have_css '#header'
    end

    it 'displays footer on landing page' do
        expect(page).to have_css '#footer'
    end

    it 'displays div with series' do
        expect(page).to have_css '#category'
    end
end