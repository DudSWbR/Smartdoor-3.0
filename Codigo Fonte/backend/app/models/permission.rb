class Permission < ApplicationRecord
  belongs_to :key
  has_many :schedules, dependent: :destroy

  enum day_of_week: { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6}
end
