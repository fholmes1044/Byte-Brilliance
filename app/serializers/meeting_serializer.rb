class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :date, :duration, :location, :user_id, :tutor_id, :topic, :tutor

end
