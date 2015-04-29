require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "Should not create user with empty name" do
    user = User.new
    assert_not user.save
  end

  test "first name should be longer than 2 symbols" do
    user = User.new
    user.first_name = 'a'
    user.last_name = 'Lastname'
    assert_not user.save
  end

  test "last name should be longer than 2 symbols" do
    user = User.new
    user.first_name = 'Firstname'
    user.last_name = 'b'
    assert_not user.save
  end

  test "if first name and last name are > 2 symbols, user will be saved" do
    user = User.new
    user.first_name = 'Firstname'
    user.last_name = 'Lastname'
    assert user.save
  end
end
