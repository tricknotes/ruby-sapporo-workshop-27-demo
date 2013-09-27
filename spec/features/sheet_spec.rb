require 'spec_helper'

feature 'sheet を管理できる', js: true do
  scenario 'sheet を作成できる' do
    visit root_path

    expect(page).to have_css('h1', text: '帳票登録')

    within all('#new-sheet tr')[1] do
      fill_in 'productName', with: 'ガラナ'
      fill_in 'unitPrice',   with: '120'
      fill_in 'count',       with: '3'
    end

    expect(page).to have_css('.total', text: '360')

    click_button '登録する'

    expect(page).to have_css('h1', text: '帳票一覧')
    expect(page).to have_css('li', text: '#1')
  end

  context '登録済の sheet が存在する' do
    background do
      create :sheet, order_lines: [
        build(:order_line)
      ]
    end

    scenario 'sheet を閲覧できる' do
      visit root_path

      click_link '一覧を見る'

      page.should have_css('li')

      within all('li').last do
        click_link '詳細を見る'
      end

      expect(page).to have_content('ガラナ')
      expect(page).to have_content('240')
    end

    scenario 'sheet を削除できる' do
      visit root_path

      click_link '一覧を見る'

      page.should have_css('li')

      expect {
        within all('li').first do
          click_link '削除'
        end
      }.to change { all('li').count }.by(-1)
    end
  end
end
