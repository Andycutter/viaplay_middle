describe 'Landing Page', type: :feature do
    before do
        visit '/'
    end

    it 'displays headline on landing page' do
        expect(page).to have_content 'Viaplay'
    end

    
end